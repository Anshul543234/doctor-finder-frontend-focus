
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import DoctorCard from "@/components/DoctorCard";
import FilterSection from "@/components/FilterSection";
import Pagination from "@/components/Pagination";
import { Doctor, mockDoctors } from "@/data/mockDoctors";
import { Separator } from "@/components/ui/separator";

// Number of doctors per page
const DOCTORS_PER_PAGE = 5;

const DoctorsPage = () => {
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // State for filters
  const [filters, setFilters] = useState({
    experience: 0,
    fees: 0,
    availability: "any",
  });

  // Apply filters and pagination
  useEffect(() => {
    let results = [...mockDoctors];
    
    // Apply experience filter
    if (filters.experience > 0) {
      results = results.filter(doctor => doctor.experience >= filters.experience);
    }
    
    // Apply fees filter
    if (filters.fees > 0) {
      if (filters.fees === 500) {
        results = results.filter(doctor => doctor.fees <= 500);
      } else if (filters.fees === 750) {
        results = results.filter(doctor => doctor.fees > 500 && doctor.fees <= 750);
      } else if (filters.fees === 1000) {
        results = results.filter(doctor => doctor.fees > 750 && doctor.fees <= 1000);
      } else if (filters.fees === 1001) {
        results = results.filter(doctor => doctor.fees > 1000);
      }
    }
    
    // For availability, we would need actual availability data
    // This is just a placeholder for the UI functionality
    
    setFilteredDoctors(results);
    setTotalPages(Math.ceil(results.length / DOCTORS_PER_PAGE));
    setCurrentPage(1); // Reset to first page when filters change
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (newFilters: {
    experience: number;
    fees: number;
    availability: string;
  }) => {
    setFilters(newFilters);
  };

  // Calculate doctors for the current page
  const currentDoctors = filteredDoctors.slice(
    (currentPage - 1) * DOCTORS_PER_PAGE,
    currentPage * DOCTORS_PER_PAGE
  );

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-apollo-text">General Physician / Internal Medicine</h1>
          <p className="text-gray-600 text-sm mt-1">
            {filteredDoctors.length} doctors available in your area
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Left Side */}
          <div className="lg:w-1/4">
            <FilterSection onFilterChange={handleFilterChange} />
          </div>
          
          {/* Doctors List - Right Side */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-5 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold">Top Doctors for General Physician</h2>
                <div className="text-sm text-gray-600">
                  Sort by: <span className="text-apollo-blue font-medium">Relevance</span>
                </div>
              </div>
              
              <Separator className="mb-4" />
              
              {/* Doctors list */}
              {currentDoctors.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-600">No doctors found matching your filters.</p>
                </div>
              ) : (
                <div>
                  {currentDoctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              {filteredDoctors.length > DOCTORS_PER_PAGE && (
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorsPage;
