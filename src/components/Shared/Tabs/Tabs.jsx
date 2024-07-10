'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
// const tabs = [
//     { id: "world", label: "World" },
//     { id: "ny", label: "N.Y." },
//     { id: "business", label: "Business" },
//     { id: "arts", label: "Arts" },
//     { id: "science", label: "Science" },
// ];
export default function Tabs({ data = [], click = () => { } }) {
    let [activeTab, setActiveTab] = useState(data[0].id);
    return (
        <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3, type: 'just' }} className="flex flex-wrap md:flex-nowrap justify-around space-x-1 bg-white dark:bg-[#28262F] text-[#605E66] dark:text-white rounded-3xl  shadow-md">
            {data.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => { click(tab); setActiveTab(tab.id); }}
                    className={`${activeTab === tab.id ? "text-white" : "hover:text-primary"
                        } relative rounded-full px-3 py-3 text-lg  w-full outline-sky-400 transition focus-visible:outline-2`}

                >
                    {activeTab === tab.id && (
                        <motion.span
                            layoutId="bubble"
                            className="absolute inset-0 z-[1] bg-[#28262F] dark:bg-primary "
                            style={{ borderRadius: 9999 }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className={`${activeTab === tab.id ? '' : ''} relative z-[2] text-sm lg:text-base`}>

                        {tab.label}
                    </span>
                </button>
            ))}
        </motion.div>
    )
}
