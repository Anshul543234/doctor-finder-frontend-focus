
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addDoctor } from "@/services/apiClient";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { specialties } from "@/data/mockDoctors";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  specialty: z.string().min(2, { message: "Specialty is required." }),
  experience: z.coerce.number().min(1, { message: "Experience must be at least 1 year." }),
  fees: z.coerce.number().min(0, { message: "Fees must be a valid number." }),
  location: z.string().min(2, { message: "Location is required." }),
  education: z.string().min(2, { message: "Education details are required." }),
  languages: z.string().min(2, { message: "Languages are required." }),
});

type FormValues = z.infer<typeof formSchema>;

interface AddDoctorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddDoctorDialog: React.FC<AddDoctorDialogProps> = ({ open, onOpenChange }) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      specialty: "",
      experience: 0,
      fees: 0,
      location: "",
      education: "",
      languages: ""
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const newDoctor = {
        name: data.name,
        specialty: data.specialty,
        experience: data.experience,
        fees: data.fees,
        location: data.location,
        education: data.education.split(",").map(item => item.trim()),
        languages: data.languages.split(",").map(item => item.trim()),
        ratings: 4.5,
        reviews: 0,
        slots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM", "5:00 PM"],
        image: "https://placeholder.svg"
      };
      
      const result = await addDoctor(newDoctor);
      
      toast({
        title: "Doctor Added Successfully",
        description: `${result.name} has been added to the directory.`,
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add doctor. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add a New Doctor</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new doctor to the database.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Doctor Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr. John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specialty</FormLabel>
                  <FormControl>
                    <Input placeholder="General Physician" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience (years)</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="fees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Consultation Fees (₹)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Apollo Clinic, City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Education (comma separated)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="MBBS, MD Internal Medicine" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="languages"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Languages (comma separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="English, Hindi" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Doctor"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddDoctorDialog;
