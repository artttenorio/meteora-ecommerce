import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { LoginForm } from "../login-form";

export default function LoginModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white  bg-[#9353FF] px-3 cursor-pointer"
      >
        {" "}
        Login
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
