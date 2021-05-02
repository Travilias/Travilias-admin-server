import PostClass from "@tas/posts/models/PostClass";
import { Report } from "@tas/reports";
import ResponseError from "@tas/tools/types/ResponseError";


interface MakePostPutOptions {
    editPost: (postInfos: any) => Promise<PostClass>;
}

export default function makePutPostReport({editPost}: MakePostPutOptions) {
    return async function putPostReport(httpRequest) {
        const id = httpRequest.params.id;

        const {reports: _reports} = httpRequest.body;
        
        if (!Array.isArray(_reports)) {
            throw new ResponseError("Bad Request", 400);
        }

        const reports = _reports.map(r => new Report(r));


        const post = await editPost({id, reports});

        await Promise.all([post.getAuthor(), post.getImages(), post.populateReports()]);

        return {post: post.toSchema()};
    }
}