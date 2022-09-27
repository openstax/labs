import { API_CONFIGURATION, ENV } from '@lib'
import { DefaultApi, Environment as ApiEnv } from '@api'
import { retry } from '../lib/util'
import { User } from './user'

export interface UserInfo {
    id: string
    full_name: string
    contact_infos: Array<{ type: string, value: string }>
}

export class Environment {

    static async bootstrap() {
        const api = new DefaultApi(API_CONFIGURATION)
        const envData = await retry(() => api.getEnvironment())
        return new Environment(envData)
    }

    config: ApiEnv

    user: User

    constructor(config: ApiEnv) {
        this.config = config
        this.user = User.bootstrap(config.user)
    }

    get host() {
        if (this.config.accountsEnvName === 'production') {
            return `https://openstax.org`;
        }
        return `https://${this.config.accountsEnvName}.openstax.org`;
    }

    get loginURL() {
        const url = this.accounts_url
        if (ENV.IS_DEV_MODE) return url

        return `${url}/login/?r=${encodeURIComponent(window.location.href)}`
    }

    get logoutURL() {
        if (ENV.IS_DEV_MODE) return '/dev/user';
        const homepage = encodeURIComponent(`${this.host}/kinetic`);
        return `${this.accounts_url}/signout?r=${homepage}`;
    }

    get accounts_url() {
        if (ENV.IS_DEV_MODE) return '/dev/user'
        return `${this.host}/accounts`;
    }

    get accounts_api_url() {
        if (ENV.IS_DEV_MODE) return `${ENV.API_ADDRESS}/development/user/api/user`
        return `${this.accounts_url}/api/user`
    }

    async fetchUserInfo(): Promise<UserInfo> {
        const resp = await fetch(`${this.accounts_api_url}`, { credentials: 'include' })
        return resp.json()
    }

}
