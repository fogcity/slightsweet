import { connectToMongoDBCluster } from "./index";
import config from "../config";
import { User, userGenerator } from "../generators/user";
import {
  Collection,
  DeleteResult,
  Document,
  Filter,
  InsertOneResult,
  MatchKeysAndValues,
  UpdateFilter,
  UpdateResult,
  WithId,
} from "mongodb";

export type CrudOperations<T extends Document, S> = (
  collection: Collection<T>
) => Promise<S>;
export type CrudOperationsWithFilter<T extends Document, S> = (
  collection: Collection<T>,
  filter: Filter<T>
) => Promise<S>;
export type CrudOperationsWithUpdatedFields<T extends Document, S> = (
  collection: Collection<T>,
  filter: Filter<T>,
  updatedFields: MatchKeysAndValues<T>
) => Promise<S>;

export async function executeUserCrudOperations(
  crudOperations: CrudOperations<User, any>
) {
  const uri = config.db.url;
  let mongoClient;
  if (uri) {
    try {
      mongoClient = await connectToMongoDBCluster(uri);
      const db = mongoClient.db("slightsweet");
      const collection = db.collection<User>("user");
      crudOperations(collection);
    } finally {
      await mongoClient?.close();
    }
  } else {
    console.log("Error MongoDB URL");
  }
}

export const createUser: CrudOperations<User, InsertOneResult<User>> = async (
  collection: Collection<User>
) => {
  const user = userGenerator({
    name: "Sylas",
  });
  const insertOneResult = await collection.insertOne(user);
  return insertOneResult;
};

export const findUser: CrudOperationsWithFilter<User, WithId<User>[]> = async (
  collection: Collection<User>,
  filter: Filter<User>
) => {
  const findResult = await collection.find(filter).toArray();
  return findResult;
};

export const updateUser: CrudOperationsWithUpdatedFields<
  User,
  UpdateResult<User>
> = async (
  collection: Collection<User>,
  filter: Filter<User>,
  updatedFields: MatchKeysAndValues<User>
) => {
  const updateResult = await collection.updateMany(filter, {
    $set: updatedFields,
  });
  return updateResult;
};

export const deleteUser: CrudOperationsWithFilter<User,DeleteResult> = async (
  collection: Collection<User>,
  filter: Filter<User>
) => {
  const deleteResult = await collection.deleteMany(filter);
  return deleteResult;
};
