import { UserModel } from "../modals/modals";

export const addUser = async ({ recipitantId }: { recipitantId: string }) => {
  try {
    await UserModel.create({
      recipitantId: recipitantId,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const removeUser = async ({ recipitantId }: { recipitantId: string }) => {
  try {
    await UserModel.deleteOne({ recipitantId: recipitantId }).exec();
  } catch (error: any) {
    console.log(error);
  }
};
