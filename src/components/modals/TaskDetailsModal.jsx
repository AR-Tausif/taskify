import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";
import DetailsTable from "../DetailsTable";
import TaskTableDetails from "../ui/TaskTableDetails";
const TaskDetailsModal = ({ scrollBehavior, isOpen, onOpen, onOpenChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
        size="full"
        backdrop="transparent"
        placement="bottom"
        radius="sm"
        className="min-h-screen bg-transparent"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 py-7"></ModalHeader>
              <ModalBody>
                <div className="min-h-screen grid justify-items-end">
                  <div className="grid w-[50vw] justify-items-end bg-green-300">
                    <DetailsTable />
                    <TaskTableDetails />
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;
