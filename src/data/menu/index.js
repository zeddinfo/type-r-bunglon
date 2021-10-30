import { ICEmoney, ICGames, ICMenu, ICPaket, ICPdam, ICPln, ICPulsa, ICTiket, ICTransfer, ICVoucher } from "./Icon";

export const menu = [
    { title: "Pulsa Data", icon: ICPulsa, navigasi: "PulsaScreen" },
    { title: "Paket Data", icon: ICPaket, navigasi: "PaketDataScreen" },
    { title: "PLN Token", icon: ICPln },
    { title: "PDAM", icon: ICPdam },
    { title: "E-Money", icon: ICEmoney },
    { title: "Tiket", icon: ICTiket },
    { title: "Games", icon: ICGames },
    { title: "Transfer", icon: ICTransfer },
    { title: "Voucher", icon: ICVoucher },
    { title: "Semua", icon: ICMenu },
];