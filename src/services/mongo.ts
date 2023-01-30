import { UserModel } from "../models/models";
import { log } from "../utils/log";

export const addUser = async ({ recipitantId }: { recipitantId: string }) => {
  try {
    await UserModel.create({
      recipitantId,
    });
  } catch (error: any) {
    log({ msg: `Creation Error${error}`, type: "ERROR", error: true });
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
    log({ msg: `Deletion Error${error}`, type: "ERROR", error: true });
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

export const disciplinaryAction = async ({
  recipitantId,
}: {
  recipitantId: string;
}) => {
  await UserModel.findOneAndUpdate(
    { recipitantId },
    {
      $inc: {
        banCount: 1,
      },
    }
  );
};
