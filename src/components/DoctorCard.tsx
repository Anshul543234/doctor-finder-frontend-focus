
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Doctor } from "@/data/mockDoctors";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  return (
    <div className="doctor-card bg-white rounded-lg shadow-md p-5 mb-6">
      <div className="flex flex-col md:flex-row">
        {/* Doctor image and basic info */}
        <div className="flex flex-col items-center md:w-1/5">
          <div className="w-24 h-24 rounded-full bg-gray-200 mb-3">
            {/* Placeholder for doctor image */}
          </div>
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-bold text-sm">{doctor.ratings}</span>
            <span className="text-gray-500 text-xs ml-1">({doctor.reviews})</span>
          </div>
          <div className="text-xs text-gray-500">{doctor.experience} Years Exp</div>
        </div>

        {/* Doctor Details */}
        <div className="md:w-3/5 mt-4 md:mt-0 md:pl-4">
          <h3 className="text-lg font-bold text-apollo-text">{doctor.name}</h3>
          <p className="text-sm text-gray-600">{doctor.specialty}</p>
          
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-600">{doctor.location}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {doctor.education.slice(0, 1).map((edu, index) => (
                <Badge key={index} variant="outline" className="text-xs font-normal">
                  {edu.split(' - ')[0]}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {doctor.languages.map((lang, index) => (
              <span key={index} className="text-xs text-gray-600">
                {lang}{index < doctor.languages.length - 1 ? "," : ""}
              </span>
            ))}
          </div>

          <div className="mt-3">
            <div className="text-sm font-medium text-apollo-blue">
              ₹{doctor.fees} Consultation fee
            </div>
          </div>
        </div>

        {/* Availability and booking */}
        <div className="md:w-1/5 mt-4 md:mt-0 flex flex-col items-center md:items-end">
          <div className="text-xs text-green-600 font-medium mb-2">Available Today</div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-2 mb-4">
            {doctor.slots.slice(0, 3).map((slot, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="text-xs bg-apollo-lightBlue text-apollo-blue border-none hover:bg-apollo-blue hover:text-white cursor-pointer"
              >
                {slot}
              </Badge>
            ))}
            {doctor.slots.length > 3 && (
              <span className="text-xs text-apollo-blue">+{doctor.slots.length - 3} more</span>
            )}
          </div>
          
          <Button className="w-full bg-apollo-blue hover:bg-apollo-darkBlue text-sm">
            Book Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
