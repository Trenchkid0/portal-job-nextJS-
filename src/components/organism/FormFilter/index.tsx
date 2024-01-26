import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import CheckboxForm from "./CheckboxForm";
import { filterFormType } from "@/types";

type FormFilterProps = {
    formFilter:any;
    onSubmitFilter: (val:any) => Promise<void> |undefined;
    filterForm: filterFormType[];
}



export default function FormFilter({formFilter,onSubmitFilter,filterForm}: FormFilterProps) {
  return (
    <Form {...formFilter}>
        <form onSubmit={formFilter.handleSubmit(onSubmitFilter)}>
                {filterForm.map((item: filterFormType, i: number) => (
					<CheckboxForm
						key={i}
						formFilter={formFilter}
						items={item.items}
						label={item.label}
						name={item.name}
					/>
				))}

				<Button className="mt-5 w-full">Apply Filter</Button>
				<Button variant="outline" className="mt-3 w-full">
					Reset Filter
				</Button>
        </form>
</Form>
  )
}