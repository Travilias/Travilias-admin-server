import {Db} from "mongodb";
import {UserSchema} from "../types";

interface UserRepositoryOptions {
    makeDb: () => Promise<Db>,
    collection: string
}

/**
 * Defines all the methods that interacts with the User collection in a MongoDb database
 * @author anthony
 */
export default class UserRepository {
    /**
     * Name of the MongoDb collection that contains users infos
     * @private
     */
    private readonly collection: string;

    /**
     * Function that creates a connection to the MongoDb database
     * @private
     */
    private readonly makeDb: () => Promise<Db>


    /**
     * Create a UserRepository instance with the given options
     * @param {Object} options - An object describing the required options to use the repository
     * @param options.collection - Name of the MongoDb collection that contains users infos
     * @param options.makeDb - Function that creates a connection to the database
     */
    constructor({makeDb, collection}: UserRepositoryOptions) {
        this.makeDb = makeDb;
        this.collection = collection;
    }

    /**
     * Get a user by its Id
     * @param id of the user to find
     * @returns {UserSchema} The founded user
     */
    public async findById(id: string): Promise<UserSchema> {
        const db = await this.makeDb();
        return await db.collection(this.collection).findOne({_id: id});
    }

    /**
     * Create a new User in the database
     * @param {UserSchema} options - Infos about the user to create
     * @returns {UserSchema} -  The created user infos
     */
    public async insert({id: _id, ...userInfos}: UserSchema): Promise<UserSchema> {
        const db = await this.makeDb();
        const result = await db.collection(this.collection).insertOne({_id, ...userInfos});
        const {_id: id, ...insertedInfos} = result.ops[0];
        return {id, ...insertedInfos};
    }

}