import { Button } from "@/components/ui/button";
import { BotMessageSquare, MoveLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Chat() {
  return (
    <div className="fixed bottom-10 right-20 z-10">
      <Dialog>
        <DialogTrigger asChild>
          <div className="hover:bg-primary-dark cursor-pointer rounded-full bg-primary px-4 py-4 transition-all">
            <div className="flex items-center gap-2">
              <BotMessageSquare className="text-white" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent
          close={false}
          className="min-h-[400px] max-w-4xl bg-white/40 backdrop-blur-lg"
        >
          <div className="flex gap-5">
            <div className="flex flex-1 flex-col">
              <div className="flex justify-between">
                <h5 className="font-title text-3xl text-white">Trợ lý ảo</h5>
                <span>Verson 1.0</span>
              </div>
            </div>
            <div className="flex-[2]">ahihi</div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Chat;
