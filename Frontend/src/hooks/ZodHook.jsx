import z from "zod";
import { toast } from "react-toastify";
const UserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const CreateUser = async (name, email, password) => {
  const user = UserSchema.safeParse({
    name,
    email,
    password,
  });
  if (!user.success) {
    toast.error(user.error.issues[0].message);
  }
  const User = await fetch("http://localhost:8080/CreateUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const UserRes = await User.json();
  return [user.error, UserRes];
};

const LoginUser = async (email, password) => {
  const user = UserSchema.safeParse({
    email,
    password,
  });
  if (!user.success) {
    toast.error(user.error.issues[0].message);
  }
  const User = await fetch("http://localhost:8080/LoginUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const UserRes = await User.json();
  return [user.error, UserRes];
};

export { CreateUser, LoginUser };
