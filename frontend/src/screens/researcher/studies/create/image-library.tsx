import { cardImages, Category, Col, getImageUrl, imageCategories, Modal, ResearcherButton } from '@components'
import { Box, React, styled, useEffect, useState } from '@common';
import { colors } from '@theme';

const CategoryLink = styled.small({
    cursor: 'pointer',
    color: colors.blue,
    textDecoration: 'underline',
    textUnderlineOffset: '.4rem',
})

const UncheckedCircle = styled.div({
    position: 'absolute',
    border: `2px solid ${colors.gray50}`,
    width: 15,
    height: 15,
    borderRadius: 25,
    top: 10,
    right: 10,
})

const CheckedCircle = () => (
    <Box align='center' justify='center' css={{
        position: 'absolute',
        border: `2px solid ${colors.blue}`,
        width: 15,
        height: 15,
        borderRadius: 25,
        top: 10,
        right: 10,
    }}>
        <div css={{
            color: colors.blue,
            position: 'absolute',
            background: colors.blue,
            width: 7,
            height: 7,
            borderRadius: 50,
        }}>

        </div>
    </Box>
)

const ImageCard: FC<{
    imageId: string,
    selectedImage: string,
    onSelect: (imageId?: string) => void
}> = ({ imageId, selectedImage, onSelect }) => {
    return (
        <div
            css={{ position: 'relative', cursor: 'pointer' }}
            onClick={() => {
                if (imageId === selectedImage) {
                    onSelect('')
                } else {
                    onSelect(imageId)
                }
            }}
        >
            <img src={getImageUrl(imageId)} data-testid='card-image' alt={imageId} width={250} height={140} css={{
                border: `1px solid ${colors.gray50}`,
                // padding: `0 25px`,
            }}/>
            {selectedImage === imageId ? <CheckedCircle/> : <UncheckedCircle/>}
        </div>
    )
}

const ImageCardContainer = styled(Box)({
    height: '100%',
    overflow: 'auto',
    paddingTop: 10,
    gridTemplateColumns: 'repeat(3, [col-start] minmax(100px, 1fr) [col-end])',
})

export const ImageLibrary: FC<{
    show: boolean,
    onHide: () => void,
    onSelect: (imageId: string) => void,
    currentImage?: string
}> = ({ show, onHide, onSelect, currentImage }) => {
    const currentCategory = cardImages.find(image => image.imageId == currentImage)?.category[0] || 'Learning'

    const [category, setCategory] = useState<Category>(currentCategory)
    const [selectedImage, setSelectedImage] = useState<string>(currentImage || 'Schoolfuturecareer_1')

    useEffect(() => () => {
        setCategory(currentCategory)
        setSelectedImage(currentImage || 'Schoolfuturecareer_1')
    }, [show])

    return (
        <Modal
            onHide={onHide}
            center
            show={show}
            xlarge
            data-testid="image-library-modal"
            title='Image Library'
        >
            <Modal.Body css={{ padding: 0, height: 500 }}>
                <Box height='100%'>
                    <Col sm={2}
                        direction='column'
                        css={{
                            backgroundColor: colors.ash,
                            padding: `20px 15px`,
                        }}
                        gap='large'
                    >
                        <h6>Category</h6>
                        {imageCategories.map(c =>
                            <CategoryLink key={c} onClick={() => setCategory(c)}>
                                {c}
                            </CategoryLink>
                        )}
                    </Col>
                    <Col sm={10} direction='column'>
                        <Box css={{ padding: 20, height: '100%' }} direction='column'>
                            <h4>{category}</h4>
                            <ImageCardContainer wrap gap='xlarge' justify='evenly'>
                                {cardImages.filter(i => i.category.includes(category)).map(cardImage => (
                                    <ImageCard
                                        key={cardImage.imageId}
                                        imageId={cardImage.imageId}
                                        selectedImage={selectedImage}
                                        onSelect={(imageId?: string) => setSelectedImage(imageId || '')}
                                    />
                                ))}
                            </ImageCardContainer>
                        </Box>
                        <Box gap='xlarge' css={{ padding: `10px 20px` }} alignSelf='end'>
                            <ResearcherButton fixedWidth buttonType='secondary' onClick={() => onHide()}>
                                Cancel
                            </ResearcherButton>
                            <ResearcherButton
                                disabled={!selectedImage}
                                fixedWidth
                                testId='select-card-image'
                                onClick={() => {
                                    onSelect(selectedImage)
                                    onHide()
                                }}
                            >
                                Select
                            </ResearcherButton>
                        </Box>
                    </Col>
                </Box>
            </Modal.Body>
        </Modal>
    )
}
