import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const shade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.15 } },
};

export const ModalWithState = React.memo(
  ({ ActionComponent, ...rest }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <ActionComponent
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        />
        <AnimatePresence>
          {isOpen && <Modal {...rest} close={() => setIsOpen(false)} />}
        </AnimatePresence>
      </>
    );
  }
);

export const Modal = React.memo(
  ({
    className = "",
    style,
    isCloseVisible = true,
    renderTitle,
    renderContent,
    renderButton,
    close,
  }: any) => {
    return (
      <motion.div initial="hidden" animate="visible" exit="hidden">
        <motion.div
          variants={shade}
          transition={{ duration: 0.2 }}
          className="modal-shade"
          onClick={close}
        />
        <div className="modal-container">
          <motion.div
            className={`modal ${className}`}
            style={{ position: "relative", ...style }}
            variants={modal}
          >
            <div className="content">
              {isCloseVisible && (
                <button type="button" onClick={close}>
                  <img src="./close.svg" alt="close" onClick={close} />
                </button>
              )}
              {renderTitle && renderTitle()}
              <div className="center">{renderContent && renderContent()}</div>
              <div className="bottom">
                {renderButton && renderButton(close)}
              </div>
            </div>
          </motion.div>
        </div>
        <style jsx>{`
          button {
            position: absolute;
            top: 0;
            right: 0;
            padding: 20px;
            background: transparent;
            border: none;
          }
          .content {
            padding: 16px 20px 16px 16px;
          }
          .content .center {
            max-height: 392px;
            padding-top: 16px;
            overflow-y: scroll;
          }
          .content :global(h2) {
            margin: 0 0 16px;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 38px;
            color: #262626;
          }
          .content :global(h3) {
            margin: 0;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: left;
            color: #262626;
          }
          .content :global(p) {
            margin: 0;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 38px;
            letter-spacing: 0em;
            text-align: left;
            color: #262626;
          }
          .bottom {
            padding: 24px 0 0 0;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          @media (min-width: 768px) {
            .content {
              padding: 40px;
            }
          }
        `}</style>
      </motion.div>
    );
  }
);
