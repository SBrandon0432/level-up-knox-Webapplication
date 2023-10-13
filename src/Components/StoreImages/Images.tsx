export function Images({ images }: any) {
    return (
        <div>
            {images.map((imageObj: any) => {
                const { image, alt } = imageObj;
                return (
                    <div>
                        <img src={image} alt={alt} />
                    </div>
                );
            })}
        </div>
    );
}
