﻿// <auto-generated />
using System;
using InitApp.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace InitApp.Infrastructure.Migrations
{
    [DbContext(typeof(InitAppDbContext))]
    partial class InitAppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("InitApp.Domain.AppUser.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AddressId");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("AddressId");

                    b.HasIndex("Username")
                        .IsUnique();

                    b.ToTable("AppUser");
                });

            modelBuilder.Entity("InitApp.Domain.AppUser.AppUserAddress", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("City");

                    b.Property<string>("Country");

                    b.Property<string>("Line1");

                    b.Property<string>("Line2");

                    b.Property<string>("Line3");

                    b.Property<string>("ZipCode");

                    b.HasKey("Id");

                    b.ToTable("AppUserAddress");
                });

            modelBuilder.Entity("InitApp.Domain.Sample.Sample", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AppUserId");

                    b.Property<string>("Category");

                    b.Property<string>("Description");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Text");

                    b.HasKey("Id");

                    b.HasIndex("AppUserId");

                    b.ToTable("Sample");
                });

            modelBuilder.Entity("InitApp.Domain.AppUser.AppUser", b =>
                {
                    b.HasOne("InitApp.Domain.AppUser.AppUserAddress", "Address")
                        .WithMany("AppUsers")
                        .HasForeignKey("AddressId");
                });

            modelBuilder.Entity("InitApp.Domain.Sample.Sample", b =>
                {
                    b.HasOne("InitApp.Domain.AppUser.AppUser", "AppUser")
                        .WithMany("Samples")
                        .HasForeignKey("AppUserId");
                });
#pragma warning restore 612, 618
        }
    }
}
