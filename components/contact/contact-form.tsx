"use client";

import { Calendar } from "@heroui/calendar";
import { TimeInput } from "@heroui/date-input";
import {
  isWeekend,
  DateValue,
  Time,
  today,
  getLocalTimeZone,
  getDayOfWeek,
} from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
import { ModalFooter } from "@heroui/modal";
import { useState } from "react";
import dynamic from "next/dynamic";

import { Button } from "../ui/button";
import {
  ClockCircleLinearIcon,
  CompanyIcon,
  RelatedContactIcon,
  SubjectIcon,
  UserIcon,
  ViewIcon,
} from "../icons";

import ContactInput from "./components/contact-input";
import CopyInput from "./components/copy-input";
import ContactConfirmSkeleton from "./contact-confirm-skeleton";

import { useModal } from "@/providers/modal-provider";

const DynamicContactConfirmForm = dynamic(
  () => import("./contact-confirm-form"),
  {
    loading: () => <ContactConfirmSkeleton />,
    ssr: false,
  },
);

export type ContactFormType = {
  date: DateValue | undefined;
  time: Time | null;
  name: string;
  email: string;
  subject: string;
  company: string;
};

export default function ContactForm({
  formFill,
}: {
  formFill?: ContactFormType;
}) {
  const { openModal } = useModal();

  const { locale } = useLocale();
  const isDateUnavailable = (date: DateValue) => isWeekend(date, locale);

  const getNextMonday = (date: DateValue) => {
    const daysUntilMonday =
      getDayOfWeek(date, "en-US") === 0
        ? 1 // Sunday → Monday
        : getDayOfWeek(date, "en-US") === 6
          ? 2 // Saturday → Monday
          : 0;

    return date.add({ days: daysUntilMonday });
  };

  const [form, setForm] = useState<ContactFormType>(
    formFill ?? {
      date: isWeekend(today(getLocalTimeZone()), locale)
        ? getNextMonday(today(getLocalTimeZone()))
        : today(getLocalTimeZone()),
      time: new Time(15, 0),
      name: "",
      email: "",
      subject: "",
      company: "",
    },
  );

  const [errors, setErrors] = useState<Partial<ContactFormType>>({
    name: undefined,
    email: undefined,
    subject: undefined,
    company: undefined,
  });

  const validateForm = () => {
    const newErrors: Partial<ContactFormType> = {};
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!form.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <CopyInput />
        <ContactInput
          errorMessage={errors.company as string}
          icon={<CompanyIcon />}
          isInvalid={!!errors.company}
          placeholder="Enter your Company Name"
          setValue={(e) =>
            setForm((prev) => {
              return {
                ...prev,
                company: e.target.value,
              };
            })
          }
          type="text"
          value={form?.company}
        />

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <Calendar
            aria-label="Date (Unavailable)"
            className="flex-none mx-auto"
            firstDayOfWeek="mon"
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
              errorMessage={errors.name as string}
              icon={<UserIcon />}
              isInvalid={!!errors.name}
              placeholder="Enter your FullName"
              setValue={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    name: e.target.value,
                  };
                })
              }
              type="text"
              value={form?.name}
            />
            <ContactInput
              errorMessage={errors.email as string}
              icon={<RelatedContactIcon />}
              isInvalid={!!errors.email}
              placeholder="Enter your Email"
              setValue={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  };
                })
              }
              type="email"
              value={form?.email}
            />
            <ContactInput
              errorMessage={errors.subject as string}
              icon={<SubjectIcon />}
              isInvalid={!!errors.subject}
              placeholder="Enter your Subject"
              setValue={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    subject: e.target.value,
                  };
                })
              }
              type="text"
              value={form?.subject}
            />
          </div>
        </div>
      </div>
      <ModalFooter className="p-0">
        <Button
          endContent={<ViewIcon />}
          size="md"
          onClick={() => {
            if (validateForm()) {
              openModal({
                title: "Email Body message",
                render: () => <DynamicContactConfirmForm form={form} />,
              });
            }
          }}
        >
          Confirm
        </Button>
      </ModalFooter>
    </>
  );
}
