
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import AddDoctorDialog from "@/components/AddDoctorDialog";

const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-2xl font-bold text-apollo-blue">MedFinder</div>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#" className="text-apollo-blue">Doctors</a>
              <a href="#" className="text-gray-600 hover:text-apollo-blue">Pharmacy</a>
              <a href="#" className="text-gray-600 hover:text-apollo-blue">Lab Tests</a>
              <a href="#" className="text-gray-600 hover:text-apollo-blue">Health Records</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Input 
                placeholder="Search doctors, specialties..."
                className="pl-9 pr-4 py-2 rounded-full border-gray-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            <Button 
              className="hidden md:flex bg-apollo-blue hover:bg-apollo-darkBlue"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="mr-2" />
              Add Doctor
            </Button>
          </div>
        </div>
        
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-2 px-4">
          <div className="container mx-auto text-sm text-gray-600">
            <span>Home</span> &gt; <span>Doctors</span> &gt; <span className="text-apollo-blue">General Physician</span>
          </div>
        </div>
      </header>

      <AddDoctorDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </>
  );
};

export default Header;
