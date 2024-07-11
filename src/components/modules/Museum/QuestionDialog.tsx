import { CircleHelp } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function QuestionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:bg-primary-dark rounded-full bg-primary/60 px-4 py-4 transition-all">
          <div className="flex items-center gap-2">
            <CircleHelp className="text-white" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bạn gặp vấn đề?</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p className="mt-4">{"Vũ ơi làm này nha <3"}</p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

export default QuestionDialog;
