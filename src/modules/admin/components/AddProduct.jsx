import { Modal, Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Combobox } from '@headlessui/react'
import { useState } from "react";
import UploadFiles from "./UploadFiles";

const people = [
  'Wade Cooper',
  'Arlene McCoy',
  'Devon Webb',
  'Tom Cook',
  'Tanya Fox',
  'Hellen Schmidt',
]

export function AddProduct({ openModal, setOpenModal, product = {} }) {
  const isEdit = !!product.name;

  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <Modal dismissible show={openModal}>
      <Modal.Header>{isEdit ? 'Editar producto' : 'Agregar producto'}</Modal.Header>
      <Modal.Body>
        <form className="flex max-w-md flex-col">
          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="productName" value="Nombre" />
            </div>
            <TextInput
              id="productName"
              value={product.name || ''}
              type="text"
              placeholder="NTFs nombre"
              required
            />
          </div>

          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="productCategory" value="Categoría" />
            </div>
            <Combobox value={selectedPerson} onChange={setSelectedPerson}>
              <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
              <Combobox.Options>
                {filteredPeople.map((person) => (
                  <Combobox.Option key={person} value={person}>
                    {person}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
          </div>

          <div className="mb-3">
            <div className="mb-2 block">
              <Label htmlFor="productCategory" value="Imagen" />
            </div>
            <UploadFiles/>
          </div>

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Guardar</Button>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
