import { Button } from "@/components/ui/button";
import { Code2, Database, BarChart3, Palette, Cloud, Shield, Smartphone, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  { id: "frontend", label: "Frontend Developer", icon: Code2 },
  { id: "backend", label: "Backend Developer", icon: Database },
  { id: "data", label: "Data Scientist", icon: BarChart3 },
  { id: "design", label: "UI/UX Designer", icon: Palette },
  { id: "cloud", label: "Cloud Engineer", icon: Cloud },
  { id: "security", label: "Security Engineer", icon: Shield },
  { id: "mobile", label: "Mobile Developer", icon: Smartphone },
  { id: "pm", label: "Product Manager", icon: Users },
];

interface RoleSelectorProps {
  selectedRole: string | null;
  onSelect: (role: string) => void;
}

export const RoleSelector = ({ selectedRole, onSelect }: RoleSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Select Target Role</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          
          return (
            <Button
              key={role.id}
              variant={isSelected ? "default" : "outline"}
              className={cn(
                "h-auto py-4 flex-col gap-2 transition-all",
                isSelected && "gradient-primary shadow-primary"
              )}
              onClick={() => onSelect(role.id)}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{role.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
