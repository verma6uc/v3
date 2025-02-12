export const createFormInput = (
  id: string, 
  label: string, 
  type: string, 
  placeholder: string
): string => `
  <div>
    <label class="block text-[15px] font-medium text-apple-gray mb-2" for="${id}">
      ${label}
    </label>
    <input 
      type="${type}" 
      id="${id}" 
      name="${id}"
      class="w-full px-4 py-3 rounded-lg border border-black/[0.1] focus:border-apple-blue 
             focus:ring-1 focus:ring-apple-blue outline-none transition-all duration-200
             text-[17px] bg-white"
      placeholder="${placeholder}"
      required
    >
  </div>
`;
