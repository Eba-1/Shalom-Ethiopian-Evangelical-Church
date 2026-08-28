"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type GiveDialogProps = {
  className?: string;
  children?: React.ReactNode;
};

const zelleNumber = "+1 503 432 9069";

export default function GiveDialog({ className, children = "GIVE" }: GiveDialogProps) {
  const [copied, setCopied] = useState(false);

  async function copyZelleNumber() {
    await navigator.clipboard.writeText(zelleNumber);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={className} type="button">{children}</button>
      </DialogTrigger>
      <DialogContent className="give-dialog" showCloseButton>
        <span className="give-dialog-watermark" aria-hidden="true">GIVE</span>
        <DialogHeader className="give-dialog-header">
          <p className="give-dialog-kicker">GIVE WITH PURPOSE</p>
          <DialogTitle>Your generosity<br />makes ministry possible.</DialogTitle>
          <DialogDescription>
            Together, we build faith, serve our community, and share God&apos;s love.
          </DialogDescription>
        </DialogHeader>

        <div className="give-dialog-options">
          <article className="give-option give-building">
            <p className="give-option-kicker">OUR FUTURE HOME</p>
            <span className="give-option-rule" aria-hidden="true" />
            <h3>Help Us Build<br />a Home</h3>
            <p>Join us as we raise funds to purchase a permanent home for our church community.</p>
            <div className="give-building-art" aria-hidden="true">
              <span className="give-building-sun" />
              <span className="give-building-steeple">✝</span>
              <span className="give-building-roof" />
              <span className="give-building-wall" />
            </div>
            <a href="https://shalomeec.com/give/" target="_blank" rel="noreferrer">
              SUPPORT THE BUILDING FUND <span>↗</span>
            </a>
          </article>

          <article className="give-option give-zelle">
            <h3>Give with Zelle</h3>
            <p>Send your tithe, offering, or gift securely through your banking app.</p>
            <span className="give-zelle-rule" aria-hidden="true" />
            <div className="give-zelle-details">
              <div className="give-qr-placeholder" aria-label="Zelle QR code placeholder">
                <span>ZELLE QR<br />PLACEHOLDER</span>
              </div>
              <div className="give-zelle-info">
                <div className="give-zelle-account">
                  <span>{zelleNumber}</span>
                  <button type="button" onClick={copyZelleNumber} aria-label="Copy Shalom Zelle phone number">
                    <Copy aria-hidden="true" />
                  </button>
                </div>
                <p className="give-zelle-note">
                  {copied ? "Number copied." : "Please confirm the recipient name before sending."}
                </p>
              </div>
            </div>
          </article>
        </div>

        <p className="give-dialog-thanks">Thank you for supporting the work God is doing through Shalom.</p>
      </DialogContent>
    </Dialog>
  );
}
