import ImageRepository from "@tas/images/data-access/image-db";

interface MakeFindImageOptions {
    imageRepository: ImageRepository;
}

export default  function makeFindImageById({imageRepository}: MakeFindImageOptions) {
    return async function findImageById(id: string) {
        return await imageRepository.findById(id);
    }
}