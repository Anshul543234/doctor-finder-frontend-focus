
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { experienceOptions, feeOptions, availabilityOptions } from "@/data/mockDoctors";

interface FilterSectionProps {
  onFilterChange: (filters: {
    experience: number;
    fees: number;
    availability: string;
  }) => void;
}

const FilterSection = ({ onFilterChange }: FilterSectionProps) => {
  const [experience, setExperience] = useState(0);
  const [fees, setFees] = useState(0);
  const [availability, setAvailability] = useState("any");

  // Reset all filters
  const resetFilters = () => {
    setExperience(0);
    setFees(0);
    setAvailability("any");
    onFilterChange({
      experience: 0,
      fees: 0,
      availability: "any"
    });
  };

  const handleExperienceChange = (value: number) => {
    setExperience(value);
    onFilterChange({
      experience: value,
      fees,
      availability
    });
  };

  const handleFeesChange = (value: number) => {
    setFees(value);
    onFilterChange({
      experience,
      fees: value,
      availability
    });
  };

  const handleAvailabilityChange = (value: string) => {
    setAvailability(value);
    onFilterChange({
      experience,
      fees,
      availability: value
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-lg">Filters</h3>
        <Button 
          variant="link" 
          onClick={resetFilters}
          className="text-apollo-blue p-0 h-auto"
        >
          Reset All
        </Button>
      </div>

      {/* Experience Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-3">Experience</h4>
        <div className="space-y-2">
          {experienceOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <Checkbox 
                id={`exp-${option.value}`} 
                checked={experience === option.value}
                onCheckedChange={() => handleExperienceChange(option.value)}
              />
              <Label 
                htmlFor={`exp-${option.value}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Fees Filter */}
      <div className="mb-6">
        <h4 className="font-medium text-sm mb-3">Consultation Fee</h4>
        <div className="space-y-2">
          {feeOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <Checkbox 
                id={`fee-${option.value}`} 
                checked={fees === option.value}
                onCheckedChange={() => handleFeesChange(option.value)}
              />
              <Label 
                htmlFor={`fee-${option.value}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div>
        <h4 className="font-medium text-sm mb-3">Availability</h4>
        <div className="space-y-2">
          {availabilityOptions.map((option) => (
            <div key={option.value} className="flex items-center">
              <Checkbox 
                id={`availability-${option.value}`} 
                checked={availability === option.value}
                onCheckedChange={() => handleAvailabilityChange(option.value)}
              />
              <Label 
                htmlFor={`availability-${option.value}`}
                className="ml-2 text-sm cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
