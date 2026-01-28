"use client";

import CopyInput from "./components/copy-input";
import { Calendar } from "@heroui/calendar";
import { TimeInput } from "@heroui/date-input";
import { isWeekend, DateValue, Time, today, getLocalTimeZone, getDayOfWeek } from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import ContactInput from "./components/contact-input";
import { ClockCircleLinearIcon, RelatedContactIcon, SubjectIcon, UserIcon, ViewIcon } from "../icons";
import { ModalFooter } from "@heroui/modal";
import { Button } from "../ui/button";
import { useState } from "react";
import { useModal } from "@/providers/modal-provider";
import dynamic from "next/dynamic";
import ContactConfirmSkeleton from "./contact-confirm-skeleton";

const DynamicContactConfirmForm = dynamic(() => import("./contact-confirm-form"), {
  loading: () => <ContactConfirmSkeleton />,
  ssr: false
});

export type ContactFormType = {
  date?: DateValue | undefined;
  time?: Time | null;
  name?: string;
  email?: string;
  subject?: string;
};

export default function ContactForm() {
  const { openModal } = useModal();

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) => isWeekend(date, locale);

  const getNextMonday = (date: DateValue) => {
    const daysUntilMonday =
      getDayOfWeek(date, 'en-US') === 0 ? 1 : // Sunday → Monday
      getDayOfWeek(date, 'en-US') === 6 ? 2 : // Saturday → Monday
      0;
    return date.add({days: daysUntilMonday});
  }

  const [form, setForm] = useState<ContactFormType>({
    date: isWeekend(today(getLocalTimeZone()), locale)
      ? getNextMonday(today(getLocalTimeZone()))
      : today(getLocalTimeZone()),
    time: new Time(15, 0),
    name: "",
    email: "",
    subject: "",
  });

  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <CopyInput />
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Calendar
            aria-label="Date (Unavailable)"
            firstDayOfWeek="mon"
            className="flex-none mx-auto"
            isDateUnavailable={isDateUnavailable}
            value={form?.date}
            onChange={(date) =>
              setForm((prev) => {
                return {
                  ...prev,
                  date: date,
                };
              })
            }
          />

          <div className="grow flex flex-col gap-4">
            <TimeInput
              defaultValue={new Time(15, 0)}
              label="Meeting Time"
              labelPlacement="inside"
              startContent={
                <ClockCircleLinearIcon className="text-xl pointer-events-none shrink-0" />
              }
              value={form?.time}
              onChange={(time) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    time,
                  };
                })
              }
            />
            <ContactInput
              placeholder="Enter your FullName"
              type="text"
              icon={<UserIcon />}
              value={form?.name}
              setValue={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                })
              }
            />
            <ContactInput
              placeholder="Enter your Email"
              type="email"
              icon={<RelatedContactIcon />}
              value={form?.email}
              setValue={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                })
              }
            />
            <ContactInput
              placeholder="Enter your Subject"
              type="text"
              icon={<SubjectIcon />}
              value={form?.subject}
              setValue={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    subject: e.target.value,
                  };
                })
              }
            />
          </div>
        </div>
      </div>
      <ModalFooter className="p-0">
        <Button
          size="md"
          endContent={<ViewIcon />}
          onClick={() =>
            openModal({
              title: "Email Body message",
              render: () => <DynamicContactConfirmForm form={form} />,
            })
          }
        >
          Confirm
        </Button>
      </ModalFooter>
    </>
  );
}
