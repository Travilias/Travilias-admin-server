import ImageRepository from "@tas/images/data-access/image-db";

interface MakeListImagesOptions {
    imageRepository: ImageRepository;
}

export default function makeListImages({imageRepository}: MakeListImagesOptions) {
    return async function listImages({limit, page, start, unControlled}: {limit: number, start: Date, page: number, unControlled?: boolean}) {
        return await imageRepository.findAll({limit, start, page, unControlled});
    }
}