using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace InitApp.Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AppUserAddress",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Line1 = table.Column<string>(nullable: true),
                    Line2 = table.Column<string>(nullable: true),
                    Line3 = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    ZipCode = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUserAddress", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AppUser",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Username = table.Column<string>(nullable: false),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    AddressId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AppUser", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AppUser_AppUserAddress_AddressId",
                        column: x => x.AddressId,
                        principalTable: "AppUserAddress",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Sample",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    Category = table.Column<string>(nullable: true),
                    AppUserId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sample", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Sample_AppUser_AppUserId",
                        column: x => x.AppUserId,
                        principalTable: "AppUser",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_AddressId",
                table: "AppUser",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_AppUser_Username",
                table: "AppUser",
                column: "Username",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sample_AppUserId",
                table: "Sample",
                column: "AppUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Sample");

            migrationBuilder.DropTable(
                name: "AppUser");

            migrationBuilder.DropTable(
                name: "AppUserAddress");
        }
    }
}
