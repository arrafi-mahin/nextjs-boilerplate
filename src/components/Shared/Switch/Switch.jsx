'use client'
import { Switch } from "@headlessui/react";
/**
 * Switch component for creating a toggle switch.
 *
 * @param {string} id - Unique identifier for the switch.
 * @param {boolean} defaultChecked - The initial checked state (true for checked, false for unchecked).
 * @param {function} onChange - Callback function to handle switch state changes.
 */

export default function SwitchButton({
  checked = false,
  onChange = () => { },
}) {


  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-[#28262F] p-1 border-[#7A738F] transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#0235FF]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
      />
    </Switch>
  );
}


