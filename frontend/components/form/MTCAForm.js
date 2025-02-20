"use client";

import { useState } from 'react';
import styles from "./MTCAForm.module.css";

const MTCAForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        projectName: '',
        accessToken: '',
        testPlan: '',
        testCaseId: '',
        framework: 'Jest'
    });

    const frameworks = ['Jest', 'Mocha', 'Cypress', 'Playwright', 'Selenium'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
        console.log('Form Submitted:', formData);
    };

    return (
        <div className={`${styles.container} flex space-x-4`}>
            <form className="w-1/2 space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="projectName" className="block font-medium">Project Name:</label>
                    <input className="w-full p-2 border rounded" type="text" name="projectName" value={formData.projectName} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="accessToken" className="block font-medium">Access Token:</label>
                    <input className="w-full p-2 border rounded" type="password" name="accessToken" value={formData.accessToken} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="testPlan" className="block font-medium">Test Plan:</label>
                    <textarea className="w-full p-2 border rounded" name="testPlan" value={formData.testPlan} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="testCaseId" className="block font-medium">Test Case ID:</label>
                    <input className="w-full p-2 border rounded" type="text" name="testCaseId" value={formData.testCaseId} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                    <label htmlFor="framework" className="block font-medium">Framework Details:</label>
                    <select className="w-full p-2 border rounded" name="framework" value={formData.framework} onChange={handleChange}>
                        {frameworks.map((fw) => (
                            <option key={fw} value={fw}>{fw}</option>
                        ))}
                    </select>
                </div>

                <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>
            </form>

            <div className="w-1/2">
                <label className="block font-medium mb-2">Prefilled Data:</label>
                <textarea className="w-full h-screen p-2 border rounded" readOnly value="Sample prefilled text goes here..." />
            </div>
        </div>
    );
};

export default MTCAForm;
