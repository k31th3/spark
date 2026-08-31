
import { Grid, Form } from "@/components";

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
                                floating="outlined"
                                variant="ghost"
                                />
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
                                name="company_name"
                                id="companyName"
                                label="Company Name"
                                variant="underlined"
                                floating="top"/>
                        </Grid.Item>

                        <Grid.Item span={{ base: 12, lg: 6 }}>
                            <Form.Input
                                name="phone_number"
                                id="phoneNumber"
                                label="Phone Number"
                                variant="underlined"
                                floating="top"/>
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