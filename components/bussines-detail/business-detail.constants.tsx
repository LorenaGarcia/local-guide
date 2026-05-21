import WebsiteIcon from "@/components/icons/website-icon";
import InstagramIcon from "@/components/icons/instagram-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";

const SOCIAL_ICONS: {
    [key: string]: {
        icon: React.ReactNode;
        bgColor: string;
        iconColor: string;
        hoverBorder: string;
    }
} = {
    'Sitio Web': {
        icon: <WebsiteIcon className="w-4 h-4" />,
        bgColor: 'bg-[#E6F4F1] text-[#2D9C8D]',
        iconColor: 'text-[#2D9C8D]',
        hoverBorder: 'hover:border-[#C1E1DC] hover:bg-[#E6F4F1]/30'
    },
    'Instagram': {
        icon: <InstagramIcon className="w-4 h-4" />,
        bgColor: 'bg-[#FFF0F3] text-[#E1306C]',
        iconColor: 'text-[#E1306C]',
        hoverBorder: 'hover:border-[#FFCCD5] hover:bg-[#FFF0F3]/30'
    },
    'Facebook': {
        icon: <FacebookIcon className="w-4 h-4" />,
        bgColor: 'bg-[#EBF5FF] text-[#1877F2]',
        iconColor: 'text-[#1877F2]',
        hoverBorder: 'hover:border-[#CDE4FF] hover:bg-[#EBF5FF]/30'
    },
    'WhatsApp': {
        icon: <WhatsAppIcon className="w-4 h-4" />,
        bgColor: 'bg-[#E8F8F5] text-[#25D366]',
        iconColor: 'text-[#25D366]',
        hoverBorder: 'hover:border-[#A7F3D0] hover:bg-[#E8F8F5]/30'
    }
};

export { SOCIAL_ICONS }