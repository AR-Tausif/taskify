import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

export default function CreateNewModal({
  isOpen,
  onOpenChange,
  register,
  handleSubmit,
  setTaskList,
  onSubmit,
}) {
  return (
    <>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Create Task
                </ModalHeader>
                <ModalBody>
                  <div className="w-full flex flex-col gap-4">
                    <div className="w-full mb-6 md:mb-0">
                      <Input
                        type="name"
                        variant="underlined"
                        label="Task Name"
                        placeholder="Write your task name..."
                        {...register("taskTitle", { required: true })}
                      />
                      <Input
                        type="type"
                        variant="underlined"
                        label="Task Type"
                        placeholder="Write your task type..."
                        {...register("taskType", { required: true })}
                      />
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    radius="sm"
                    color="danger"
                    variant="flat"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    type="submit"
                    radius="sm"
                    color="primary"
                    onPress={onClose}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
