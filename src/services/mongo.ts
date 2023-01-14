import { UserModel } from "../modals/modals";

export const addUser = async ({ recipitantId }: { recipitantId: string }) => {
  try {
    await UserModel.create({
      recipitantId,
    });
  } catch (error: any) {
    console.log(error);
  }
};


export const removeUser = async ({
  recipitantId,
}: {
  recipitantId: string;
}) => {
  try {
    await UserModel.deleteOne({ recipitantId }).exec();
  } catch (error: any) {
    console.log(error);
  }
};

export const increaseNumberOfCmd = async ({
  recipitantId,
}: {
  recipitantId: string;
}) => {
  await UserModel.findOneAndUpdate(
    { recipitantId },
    {
      $inc: { numberOfCmds: 1 },
    }
  );
};
