import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteURL).setProject(conf.projectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, slug, featureimage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.databaseid,
        conf.collectionid,
        slug,
        {
          title,
          content,
          featureimage,
          userId,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug,{title,content,featureimage,status}){
        try {
          return await  this.database.updateDocument(
            conf.databaseid,
            conf.collectionid,
            slug,
            {
                title,
                content,
                featureimage,
                status
            }
          )
        } catch (error) {
            throw error ;

        }
  }

  async deletPost(slug){
    try {
        await this.database.deleteDocument(
            conf.databaseid,
            conf.collectionid,
            slug
        )
        return true;
    } catch (error) {
        throw error;
        return false;
    }
  }

  async getPost(slug){
    try {
        return await this.database.getDocument(
            conf.databaseid,
            conf.collectionid
            ,slug
        )
    } catch (error) {
        throw error
        return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try {
        return await this.database.listDocuments(
            conf.databaseid
            ,conf.collectionid,
            queries
        )
    } catch (error) {
        throw error
        
    }
  }


//   file upload serive :
async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.bucketid,
                ID.unique(,
                    file
                )
            )
        } catch (error) {
            throw error;            
        }
}

async deleteFile(fileId){
try {
    await this.bucket.deleteFile(
        conf.bucketid,
        fileId
    )
    return true
} catch (error) {
    throw error
    return false ;
}
}

getFilePrev(fileId){
    return this.bucket.getFilePreview(
        conf.bucketid,
        fileId
    )
}

}

const service = new Service();

export default service;
