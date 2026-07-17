import { portfolioData } from "@/data/portfolio";
import { redirect } from "next/navigation";

export default function ResumePage() {
    const resumeUrl = portfolioData.personal.resumeUrl;

    if (resumeUrl) {
        redirect(resumeUrl);
    }

    redirect("/");
}