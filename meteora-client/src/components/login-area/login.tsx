import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { LoginForm } from "../login-form";

export default function LoginModal({ open, setOpen, setRegisterOpen }: { open: boolean, setOpen: (open: boolean) => void, setRegisterOpen: (open: boolean) => void }) {

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
          <LoginForm setOpen={setOpen} setRegisterOpen={setRegisterOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}
