"use client";

import { Footer } from "flowbite-react";

function FooterWebsite() {
  return (
    <Footer container>
      <Footer.Copyright href="#" by="NonFungibleStore" year={2024} />
      <Footer.LinkGroup>
        <Footer.Link href="#">Acerca de</Footer.Link>
        <Footer.Link href="#">Política de Privacidad</Footer.Link>
        <Footer.Link href="#">Licencias</Footer.Link>
        <Footer.Link href="#">Contacto</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  );
}

export default FooterWebsite;