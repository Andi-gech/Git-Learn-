import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

export default function UseFetchAttendance(year, month) {
  const Fetchqr = async () => {
    return await axios.get(
      `http://localhost:4343/api/v1/attendance/${year}/${month + 1}`,
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIza3dhN3p2dVdRUDl4bGJOV19rVTNqWGVKeDZXYjU0TTdTejJPZ1F5bnlVIn0.eyJleHAiOjE3MzA2ODc0NTYsImlhdCI6MTczMDY1ODY1NiwianRpIjoiOTM2MjhmZTUtNTIwMi00NGM0LTk2MjgtOWU1OGFjNjBmY2Q3IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9Ici1zeXN0ZW0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMWVlZjUzMTEtMzg0ZC00NmI3LTkxMGEtMmUyZjIwMTJhMDdhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiTWljcm9zZXJ2aWNlQXV0aCIsInNpZCI6ImM2OGYxNGMwLWJjMmMtNGMyYy1hZjUwLTMwZTkxMDI0ZTExMiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiIsImh0dHA6Ly9sb2NhbGhvc3Q6NTE3MyJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1oci1zeXN0ZW0iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJBbmR1YWxlbSBHZXRhY2hldyIsInByZWZlcnJlZF91c2VybmFtZSI6ImFuZGkiLCJnaXZlbl9uYW1lIjoiQW5kdWFsZW0iLCJmYW1pbHlfbmFtZSI6IkdldGFjaGV3IiwiZW1haWwiOiJhbmRpLmZhYjIzQGdtYWlsLmNvbSJ9.oyfOLcMNPn9HeiqdUdxFrAW2-dU_IoAZTE4Knj0qdkyFj2EK_hpn3snY5fFpSYyqpnIc9zTz3lgeYaFjeOwWhxSPWuS2yoVKBqmlsdz4y-2n4nrmGxf33OBzh8GEp3TKhBI4ZEWJ0LEPrN8ijcgbCyLd-Y6oLKElAFd_1QgEkamlqI0gUXpppypWmQ6bSoU9c-Gc4A77AxTMKiOQUeMd8MJd3Vlu0vIOPBYcJS5efoATF01DN4uMZ-LNpfjkDEfh3WXXn1bHR5-fV-8OR_UIqFvUSZgLxf4fL51Z-J4HlPicuPI6YfyP3AdNqdn16K_omGE2fPECN0FX3n6Az0Q9Aw",
        },
      }
    );
  };
  const AuthHeader = useAuthHeader();
  console.log("AuthHeader", AuthHeader);
  return useQuery({
    queryKey: ["attendance", year, month + 1], // Include departmentId in the query key
    queryFn: Fetchqr,
    refetchOnWindowFocus: false,
    enabled: !!(year && month), // Ensure query only runs when departmentId is valid
  });
}
