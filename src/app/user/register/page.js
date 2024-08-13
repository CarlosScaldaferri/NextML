import Button from "@/components/form/button/Buttom";
import Imput from "@/components/form/imput/Imput";

export default function Page() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <form>
        {/* Username */}
        <div className="mb-4">
          <Imput
            label="User name"
            type="text"
            id="userName"
            name="userName"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <Imput
            label="Password"
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900"
          />
        </div>
        {/* Submit Button */}
        <Button type="submit" children="Registrar" />
      </form>
    </div>
  );
}
