import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { RegisterForm } from "../register-form";

export default function RegisterModal({ open, setOpen, setLoginOpen }: { open: boolean, setOpen: (open: boolean) => void, setLoginOpen: (open: boolean) => void }) {

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-white border-2 border-white px-3 cursor-pointer"
      >
        {" "}
        Cadastro
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <RegisterForm setOpen={setOpen} setLoginOpen={setLoginOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
}
