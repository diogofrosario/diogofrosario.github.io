import React from "react";

interface SkillCardProps {
  Icon: React.ComponentType<{ size?: number }>; // Icon component with size prop
  skillName: string;
  iconSize?: number;
}

export default function SkillCard({ Icon, skillName, iconSize = 48 }: SkillCardProps) {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-900 rounded-lg p-5 m-4 w-56 hover:scale-110 hover:bg-gray-800 transition-transform duration-300">
        <Icon size={iconSize} />
        <p className="mt-3 text-lg font-semibold text-white text-center">{skillName}</p>
      </div>
    );
  }
