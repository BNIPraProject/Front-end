<template>
  <v-card>
    <v-card-title>
      Daftar Mahasiswa
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="mahasiswa"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "mahasiswa",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "NIM",
          align: "start",
          sortable: true,
          value: "nim",
        },
        { text: "Nama Mahasiswa", value: "nama" },
        { text: "Email", value: "email" },
        { text: "Domisili", value: "domisili" },
        { text: "Angkatan", value: "angkatan" },
        { text: "Jenis Kelamin", value: "gender" },
      ],
      mahasiswa: [
        {
          nim: "12345",
          nama: "Abdul",
          email: "abdul@email.com",
          domisili: "Jakarta",
          angkatan: 2018,
          gender: "Laki laki",
        },
        {
          nim: "12346",
          nama: "Aditya",
          email: "Aditya@email.com",
          domisili: "Bandung",
          angkatan: 2018,
          gender: "Laki laki",
        },
        {
          nim: "12347",
          nama: "Annisa",
          email: "annisa@email.com",
          domisili: "Bali",
          angkatan: 2019,
          gender: "Perempuan",
        },
        {
          nim: "12348",
          nama: "Dian",
          email: "dian@email.com",
          domisili: "Jakarta",
          angkatan: 2017,
          gender: "Perempuan",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>