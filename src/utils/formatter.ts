export class Formatter {
    static formatDate(value: Date): string {
        const date = value;

        return Intl.DateTimeFormat("es-ES", {
            year: "numeric",
            month: "long",
            day: "2-digit",
        }).format(date)
    }
}