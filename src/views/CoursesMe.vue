<template>
<v-app>
  <v-card>
    <v-tabs
      background-color="light-blue darken-4"
      center-active
      dark
    >
      <v-tab route
    :to="courses" >Semua Course</v-tab>
      <v-tab>Course Saya</v-tab>
    </v-tabs>
  </v-card>
  <v-data-table
    :headers="headers"
    :items="coursesme"
    :search="search"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Enlollment key"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-snackbar v-model="snackbar">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
              <v-btn color="blue darken-1" text @click="save" > Enrol </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure to Unenroll this course?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn color="white" white class="mb-2" @click="deleteItem(item)">
        Unenroll
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
  </v-app>
</template>

<script>
export default {
  data: () => ({
      courses:'/courses',
    snackbar: false,
      text: `Hello, I'm a snackbar`,
    value: 1,
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID Course",
        align: "start",
        sortable: false,
        value: "idCourse",
      },
      { text: "Nama Course", value: "course" },
      { text: "Dosen Pengajar", value: "dosen" },
      { text: "Jumlah SKS", value: "sks" },
      { text: "Jumlah Mahasiswa", value: "jumlah" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    coursesme: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Input Enrollment key";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.coursesme = [
        {
          idCourse: "ID1234",
          course: "Pemrograman Web",
          dosen: "Ir.Soekarno",
          sks: 4,
          jumlah: 30,
          ekey: "pw12is",
        },
        {
          idCourse: "ID1235",
          course: "Pemrograman Mobile",
          dosen: "Ir.Soekarno",
          sks: 4,
          jumlah: 30,
          ekey: "pm31is",
        },
        {
          idCourse: "ID1236",
          course: "Pemrograman Desktop",
          dosen: "Ir.Soekarno",
          sks: 4,
          jumlah: 30,
          ekey: "pd99is",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.coursesme.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.coursesme.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.coursesme.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.coursesme[this.editedIndex], this.editedItem);
      } else {
        this.coursesme.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>