
import { Grid, Form } from "@/components";
import { RiBuildingLine } from "react-icons/ri";
import { MdOutlinePhone } from "react-icons/md";

function ContactForm()
{
    return (
        <Form autoComplete="off">

           <Grid cols={{ base: 12 }} gap={4}>

                {/* LEFT */}
                <Grid.Item span={{ base: 12, lg: 6 }}>
                    <Grid cols={{ base: 12 }} gap={4}>
                        <Grid.Item span={{ base: 12, lg: 6 }}>
                            <Form.Input
                                name="fullname"
                                id="fullname"
                                label="Full Name"
                                variant="underlined"
                                floating="top"/>
                        </Grid.Item>

                        <Grid.Item span={{ base: 12, lg: 6 }}>
                            <Form.Input
                                type="email"
                                name="email"
                                id="email"
                                label="Email Address"/>
                        </Grid.Item>

                        <Grid.Item span={{ base: 12, lg: 6 }}>
                            <Form.Input
                                leftIcon={RiBuildingLine}
                                name="company_name"
                                id="companyName"
                                placeholder="Company Name"/>
                        </Grid.Item>

                        <Grid.Item span={{ base: 12, lg: 6 }}>
                            <Form.Input
                                leftIcon={MdOutlinePhone}
                                name="phone_number"
                                id="phoneNumber"
                                placeholder="Phone Number"/>

                        </Grid.Item>
                    </Grid>
                </Grid.Item>

                {/* RIGHT */}
                <Grid.Item span={{ base: 12, lg: 6 }}>
                    p
                </Grid.Item>

            </Grid>



        </Form> 
    )
}

export default ContactForm;