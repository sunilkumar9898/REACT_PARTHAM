import React from 'react'

const DynamicCheckBox = ({ label, name, onChange, course, checked }) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            {course.map((course) => (
                <div>
                    <input
                        type="checkbox"
                        name={name}
                        value={course}
                        checked={checked.includes(course)}
                        onChange={onChange}
                    />
                    {course}
                </div>
            ))}
        </div>
    );
};

export default DynamicCheckBox
