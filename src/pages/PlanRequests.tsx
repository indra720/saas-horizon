import { motion } from "framer-motion";
import { Inbox } from "lucide-react";

export default function PlanRequests() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Plan Requests</h1>
        <p className="text-sm text-muted-foreground">Review manual plan upgrade requests</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-6 py-20 card-shadow"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <Inbox className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">No Plan Requests Found</h3>
        <p className="max-w-sm text-center text-sm text-muted-foreground">
          There are no manually submitted plan requests at the moment. When users request a plan change, they will appear here.
        </p>
      </motion.div>
    </div>
  );
}
