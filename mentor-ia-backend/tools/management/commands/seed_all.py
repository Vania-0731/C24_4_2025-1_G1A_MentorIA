from django.core.management.base import BaseCommand
from academic_management.models import Career, Course, AcademicPeriod
from datetime import datetime

class Command(BaseCommand):
    help = 'Seed database with base data (Career, Course, AcademicPeriod)'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS("Seeding base data..."))

        # === Carreras actualizadas ===
        careers_data = [
            ('C24', 'Diseño y Desarrollo de Software'),
            ('C20', 'Administración de Redes y Comunicaciones'),
        ]
        for code, name in careers_data:
            Career.objects.get_or_create(code=code, name=name)
        self.stdout.write(self.style.SUCCESS(f"{len(careers_data)} carreras creadas."))

        # === Cursos actualizados ===
        courses = [
            'Investigación e Innovación Tecnológica',
            'Desarrollo de Aplicaciones Empresariales',
            'Construcción y Pruebas de Software',
            'Desarrollo de Aplicaciones Web',
            'Programación en Móviles',
            'Tecnologías Emergentes',
        ]
        for name in courses:
            Course.objects.get_or_create(name=name)
        self.stdout.write(self.style.SUCCESS(f"{len(courses)} cursos creados."))

        # === Periodos desde 2023-1 hasta 2025-1 ===
        periods = [
            ('2023 - 1', 2023, 1, '2023-03-01', '2023-07-15'),
            ('2023 - 2', 2023, 2, '2023-08-01', '2023-12-15'),
            ('2024 - 1', 2024, 1, '2024-03-01', '2024-07-15'),
            ('2024 - 2', 2024, 2, '2024-08-01', '2024-12-15'),
            ('2025 - 1', 2025, 1, '2025-03-01', '2025-07-15'),
        ]
        for name, year, term, start, end in periods:
            AcademicPeriod.objects.get_or_create(
                name=name,
                year=year,
                term=term,
                start_date=datetime.strptime(start, "%Y-%m-%d"),
                end_date=datetime.strptime(end, "%Y-%m-%d")
            )
        self.stdout.write(self.style.SUCCESS(f"{len(periods)} periodos académicos creados."))

        self.stdout.write(self.style.SUCCESS("✅ Seeding completo de datos base."))
